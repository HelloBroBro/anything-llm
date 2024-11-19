const MODELS = {
  "zero-one-ai/Yi-34B-Chat": {
    id: "zero-one-ai/Yi-34B-Chat",
    organization: "01.AI",
    name: "01-ai Yi Chat (34B)",
    maxLength: 4096,
  },
  "Austism/chronos-hermes-13b": {
    id: "Austism/chronos-hermes-13b",
    organization: "Austism",
    name: "Chronos Hermes (13B)",
    maxLength: 2048,
  },
  "cognitivecomputations/dolphin-2.5-mixtral-8x7b": {
    id: "cognitivecomputations/dolphin-2.5-mixtral-8x7b",
    organization: "cognitivecomputations",
    name: "Dolphin 2.5 Mixtral 8x7b",
    maxLength: 32768,
  },
  "databricks/dbrx-instruct": {
    id: "databricks/dbrx-instruct",
    organization: "databricks",
    name: "DBRX Instruct",
    maxLength: 32768,
  },
  "deepseek-ai/deepseek-coder-33b-instruct": {
    id: "deepseek-ai/deepseek-coder-33b-instruct",
    organization: "DeepSeek",
    name: "Deepseek Coder Instruct (33B)",
    maxLength: 16384,
  },
  "deepseek-ai/deepseek-llm-67b-chat": {
    id: "deepseek-ai/deepseek-llm-67b-chat",
    organization: "DeepSeek",
    name: "DeepSeek LLM Chat (67B)",
    maxLength: 4096,
  },
  "garage-bAInd/Platypus2-70B-instruct": {
    id: "garage-bAInd/Platypus2-70B-instruct",
    organization: "garage-bAInd",
    name: "Platypus2 Instruct (70B)",
    maxLength: 4096,
  },
  "google/gemma-2b-it": {
    id: "google/gemma-2b-it",
    organization: "Google",
    name: "Gemma Instruct (2B)",
    maxLength: 8192,
  },
  "google/gemma-7b-it": {
    id: "google/gemma-7b-it",
    organization: "Google",
    name: "Gemma Instruct (7B)",
    maxLength: 8192,
  },
  "Gryphe/MythoMax-L2-13b": {
    id: "Gryphe/MythoMax-L2-13b",
    organization: "Gryphe",
    name: "MythoMax-L2 (13B)",
    maxLength: 4096,
  },
  "Gryphe/MythoMax-L2-13b-Lite": {
    id: "Gryphe/MythoMax-L2-13b-Lite",
    organization: "Gryphe",
    name: "MythoMax-L2 Lite (13B)",
    maxLength: 4096,
  },
  "lmsys/vicuna-13b-v1.5": {
    id: "lmsys/vicuna-13b-v1.5",
    organization: "LM Sys",
    name: "Vicuna v1.5 (13B)",
    maxLength: 4096,
  },
  "lmsys/vicuna-7b-v1.5": {
    id: "lmsys/vicuna-7b-v1.5",
    organization: "LM Sys",
    name: "Vicuna v1.5 (7B)",
    maxLength: 4096,
  },
  "codellama/CodeLlama-13b-Instruct-hf": {
    id: "codellama/CodeLlama-13b-Instruct-hf",
    organization: "Meta",
    name: "Code Llama Instruct (13B)",
    maxLength: 16384,
  },
  "codellama/CodeLlama-34b-Instruct-hf": {
    id: "codellama/CodeLlama-34b-Instruct-hf",
    organization: "Meta",
    name: "Code Llama Instruct (34B)",
    maxLength: 16384,
  },
  "codellama/CodeLlama-70b-Instruct-hf": {
    id: "codellama/CodeLlama-70b-Instruct-hf",
    organization: "Meta",
    name: "Code Llama Instruct (70B)",
    maxLength: 4096,
  },
  "codellama/CodeLlama-7b-Instruct-hf": {
    id: "codellama/CodeLlama-7b-Instruct-hf",
    organization: "Meta",
    name: "Code Llama Instruct (7B)",
    maxLength: 16384,
  },
  "meta-llama/Llama-2-70b-chat-hf": {
    id: "meta-llama/Llama-2-70b-chat-hf",
    organization: "Meta",
    name: "LLaMA-2 Chat (70B)",
    maxLength: 4096,
  },
  "meta-llama/Llama-2-13b-chat-hf": {
    id: "meta-llama/Llama-2-13b-chat-hf",
    organization: "Meta",
    name: "LLaMA-2 Chat (13B)",
    maxLength: 4096,
  },
  "meta-llama/Llama-2-7b-chat-hf": {
    id: "meta-llama/Llama-2-7b-chat-hf",
    organization: "Meta",
    name: "LLaMA-2 Chat (7B)",
    maxLength: 4096,
  },
  "meta-llama/Llama-3-8b-chat-hf": {
    id: "meta-llama/Llama-3-8b-chat-hf",
    organization: "Meta",
    name: "LLaMA-3 Chat (8B)",
    maxLength: 8192,
  },
  "meta-llama/Llama-3-70b-chat-hf": {
    id: "meta-llama/Llama-3-70b-chat-hf",
    organization: "Meta",
    name: "LLaMA-3 Chat (70B)",
    maxLength: 8192,
  },
  "meta-llama/Meta-Llama-3-8B-Instruct-Turbo": {
    id: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
    organization: "Meta",
    name: "LLaMA-3 Chat (8B) Turbo",
    maxLength: 8192,
  },
  "meta-llama/Meta-Llama-3-70B-Instruct-Turbo": {
    id: "meta-llama/Meta-Llama-3-70B-Instruct-Turbo",
    organization: "Meta",
    name: "LLaMA-3 Chat (70B) Turbo",
    maxLength: 8192,
  },
  "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo": {
    id: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    organization: "Meta",
    name: "Llama 3.1 8B Instruct Turbo",
    maxLength: 8192,
  },
  "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo": {
    id: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
    organization: "Meta",
    name: "Llama 3.1 70B Instruct Turbo",
    maxLength: 8192,
  },
  "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo": {
    id: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
    organization: "Meta",
    name: "Llama 3.1 405B Instruct Turbo",
    maxLength: 4096,
  },
  "mistralai/Mistral-7B-Instruct-v0.1": {
    id: "mistralai/Mistral-7B-Instruct-v0.1",
    organization: "mistralai",
    name: "Mistral (7B) Instruct",
    maxLength: 8192,
  },
  "mistralai/Mistral-7B-Instruct-v0.2": {
    id: "mistralai/Mistral-7B-Instruct-v0.2",
    organization: "mistralai",
    name: "Mistral (7B) Instruct v0.2",
    maxLength: 32768,
  },
  "mistralai/Mistral-7B-Instruct-v0.3": {
    id: "mistralai/Mistral-7B-Instruct-v0.3",
    organization: "mistralai",
    name: "Mistral (7B) Instruct v0.3",
    maxLength: 32768,
  },
  "mistralai/Mixtral-8x7B-Instruct-v0.1": {
    id: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    organization: "mistralai",
    name: "Mixtral-8x7B Instruct (46.7B)",
    maxLength: 32768,
  },
  "mistralai/Mixtral-8x22B-Instruct-v0.1": {
    id: "mistralai/Mixtral-8x22B-Instruct-v0.1",
    organization: "mistralai",
    name: "Mixtral-8x22B Instruct (141B)",
    maxLength: 65536,
  },
  "NousResearch/Nous-Capybara-7B-V1p9": {
    id: "NousResearch/Nous-Capybara-7B-V1p9",
    organization: "NousResearch",
    name: "Nous Capybara v1.9 (7B)",
    maxLength: 8192,
  },
  "NousResearch/Nous-Hermes-2-Mistral-7B-DPO": {
    id: "NousResearch/Nous-Hermes-2-Mistral-7B-DPO",
    organization: "NousResearch",
    name: "Nous Hermes 2 - Mistral DPO (7B)",
    maxLength: 32768,
  },
  "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO": {
    id: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
    organization: "NousResearch",
    name: "Nous Hermes 2 - Mixtral 8x7B-DPO (46.7B)",
    maxLength: 32768,
  },
  "NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT": {
    id: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT",
    organization: "NousResearch",
    name: "Nous Hermes 2 - Mixtral 8x7B-SFT (46.7B)",
    maxLength: 32768,
  },
  "NousResearch/Nous-Hermes-llama-2-7b": {
    id: "NousResearch/Nous-Hermes-llama-2-7b",
    organization: "NousResearch",
    name: "Nous Hermes LLaMA-2 (7B)",
    maxLength: 4096,
  },
  "NousResearch/Nous-Hermes-Llama2-13b": {
    id: "NousResearch/Nous-Hermes-Llama2-13b",
    organization: "NousResearch",
    name: "Nous Hermes Llama-2 (13B)",
    maxLength: 4096,
  },
  "NousResearch/Nous-Hermes-2-Yi-34B": {
    id: "NousResearch/Nous-Hermes-2-Yi-34B",
    organization: "NousResearch",
    name: "Nous Hermes-2 Yi (34B)",
    maxLength: 4096,
  },
  "openchat/openchat-3.5-1210": {
    id: "openchat/openchat-3.5-1210",
    organization: "OpenChat",
    name: "OpenChat 3.5 (7B)",
    maxLength: 8192,
  },
  "Open-Orca/Mistral-7B-OpenOrca": {
    id: "Open-Orca/Mistral-7B-OpenOrca",
    organization: "OpenOrca",
    name: "OpenOrca Mistral (7B) 8K",
    maxLength: 8192,
  },
  "Qwen/Qwen1.5-0.5B-Chat": {
    id: "Qwen/Qwen1.5-0.5B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (0.5B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-1.8B-Chat": {
    id: "Qwen/Qwen1.5-1.8B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (1.8B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-4B-Chat": {
    id: "Qwen/Qwen1.5-4B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (4B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-7B-Chat": {
    id: "Qwen/Qwen1.5-7B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (7B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-14B-Chat": {
    id: "Qwen/Qwen1.5-14B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (14B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-32B-Chat": {
    id: "Qwen/Qwen1.5-32B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (32B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-72B-Chat": {
    id: "Qwen/Qwen1.5-72B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (72B)",
    maxLength: 32768,
  },
  "Qwen/Qwen1.5-110B-Chat": {
    id: "Qwen/Qwen1.5-110B-Chat",
    organization: "Qwen",
    name: "Qwen 1.5 Chat (110B)",
    maxLength: 32768,
  },
  "Qwen/Qwen2-72B-Instruct": {
    id: "Qwen/Qwen2-72B-Instruct",
    organization: "Qwen",
    name: "Qwen 2 Instruct (72B)",
    maxLength: 32768,
  },
  "snorkelai/Snorkel-Mistral-PairRM-DPO": {
    id: "snorkelai/Snorkel-Mistral-PairRM-DPO",
    organization: "Snorkel AI",
    name: "Snorkel Mistral PairRM DPO (7B)",
    maxLength: 32768,
  },
  "Snowflake/snowflake-arctic-instruct": {
    id: "Snowflake/snowflake-arctic-instruct",
    organization: "Snowflake",
    name: "Snowflake Arctic Instruct",
    maxLength: 4096,
  },
  "togethercomputer/alpaca-7b": {
    id: "togethercomputer/alpaca-7b",
    organization: "Stanford",
    name: "Alpaca (7B)",
    maxLength: 2048,
  },
  "teknium/OpenHermes-2-Mistral-7B": {
    id: "teknium/OpenHermes-2-Mistral-7B",
    organization: "Teknium",
    name: "OpenHermes-2-Mistral (7B)",
    maxLength: 8192,
  },
  "teknium/OpenHermes-2p5-Mistral-7B": {
    id: "teknium/OpenHermes-2p5-Mistral-7B",
    organization: "Teknium",
    name: "OpenHermes-2.5-Mistral (7B)",
    maxLength: 8192,
  },
  "togethercomputer/Llama-2-7B-32K-Instruct": {
    id: "togethercomputer/Llama-2-7B-32K-Instruct",
    organization: "Together",
    name: "LLaMA-2-7B-32K-Instruct (7B)",
    maxLength: 32768,
  },
  "togethercomputer/RedPajama-INCITE-Chat-3B-v1": {
    id: "togethercomputer/RedPajama-INCITE-Chat-3B-v1",
    organization: "Together",
    name: "RedPajama-INCITE Chat (3B)",
    maxLength: 2048,
  },
  "togethercomputer/RedPajama-INCITE-7B-Chat": {
    id: "togethercomputer/RedPajama-INCITE-7B-Chat",
    organization: "Together",
    name: "RedPajama-INCITE Chat (7B)",
    maxLength: 2048,
  },
  "togethercomputer/StripedHyena-Nous-7B": {
    id: "togethercomputer/StripedHyena-Nous-7B",
    organization: "Together",
    name: "StripedHyena Nous (7B)",
    maxLength: 32768,
  },
  "Undi95/ReMM-SLERP-L2-13B": {
    id: "Undi95/ReMM-SLERP-L2-13B",
    organization: "Undi95",
    name: "ReMM SLERP L2 (13B)",
    maxLength: 4096,
  },
  "Undi95/Toppy-M-7B": {
    id: "Undi95/Toppy-M-7B",
    organization: "Undi95",
    name: "Toppy M (7B)",
    maxLength: 4096,
  },
  "WizardLM/WizardLM-13B-V1.2": {
    id: "WizardLM/WizardLM-13B-V1.2",
    organization: "WizardLM",
    name: "WizardLM v1.2 (13B)",
    maxLength: 4096,
  },
  "upstage/SOLAR-10.7B-Instruct-v1.0": {
    id: "upstage/SOLAR-10.7B-Instruct-v1.0",
    organization: "upstage",
    name: "Upstage SOLAR Instruct v1 (11B)",
    maxLength: 4096,
  },
};

module.exports.MODELS = MODELS;
