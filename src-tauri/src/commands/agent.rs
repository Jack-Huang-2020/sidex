use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
pub struct AgentToolRequest {
    pub tool_call_id: String,
    pub name: String,
    pub arguments: String,
    pub cwd: String,
}

#[derive(Debug, Serialize)]
pub struct AgentToolResponse {
    pub tool_call_id: String,
    pub output: String,
    pub error: String,
}

#[tauri::command]
pub async fn agent_execute_tool(request: AgentToolRequest) -> AgentToolResponse {
    let fallback_id = request.tool_call_id.clone();
    let result = tauri::async_runtime::spawn_blocking(move || {
        let ctx = sidex_agent::ToolContext {
            cwd: request.cwd.clone(),
        };
        let req = sidex_agent::ToolRequest {
            tool_call_id: request.tool_call_id.clone(),
            name: request.name,
            arguments: request.arguments,
        };
        let resp = sidex_agent::execute(&req, &ctx);
        AgentToolResponse {
            tool_call_id: resp.tool_call_id,
            output: resp.output,
            error: resp.error,
        }
    })
    .await;

    result.unwrap_or_else(|e| AgentToolResponse {
        tool_call_id: fallback_id,
        output: String::new(),
        error: format!("internal error: {e}"),
    })
}
