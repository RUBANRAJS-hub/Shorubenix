import React, { useState, useEffect } from 'react'
import './CodeTerminalAnimation.css'

const CODE_SNIPPETS = [
  {
    filename: 'digitalTransformation.ts',
    lang: 'TypeScript',
    lines: [
      'import { EnterprisePlatform, CloudEngine, AIModule } from "@shorubenix/core";',
      'import { DeployPipeline } from "@shorubenix/cloud";',
      '',
      'export async function initializeTransformation(companyId: string) {',
      '  const platform = new EnterprisePlatform({ id: companyId, tier: "GLOBAL" });',
      '  const cloud = await CloudEngine.provisionKubernetesCluster({ region: "ap-south-1" });',
      '  const aiEngine = new AIModule.RAGPipeline({ model: "GPT-4o / Scopus-AI" });',
      '',
      '  console.log("⚡ [SHORUBENIX] Synthesizing Microservices & AI Workflows...");',
      '  await platform.attachAI(aiEngine);',
      '  await cloud.deployZeroDowntime(platform);',
      '  return { status: 200, message: "Transformation Complete 🚀" };',
      '}'
    ]
  },
  {
    filename: 'aiPredictiveEngine.py',
    lang: 'Python 3.12',
    lines: [
      'import torch',
      'from shorubenix_ai import NeuralPipeline, PlagiarismAuditor',
      '',
      'class DeepTransformationEngine(torch.nn.Module):',
      '    def __init__(self, num_features=1024):',
      '        super().__init__()',
      '        self.transformer = torch.nn.Transformer(d_model=512, nhead=8)',
      '        self.auditor = PlagiarismAuditor(threshold=0.10)',
      '',
      '    def forward(self, input_data):',
      '        verified = self.auditor.verify_originality(input_data)',
      '        return self.transformer(verified.tensor)',
      '',
      '# ⚡ [LOG] Shorubenix R&D Engine Active: 100% Original Output Guaranteed'
    ]
  },
  {
    filename: 'smartContract.sol',
    lang: 'Solidity',
    lines: [
      '// SPDX-License-Identifier: MIT',
      'pragma solidity ^0.8.26;',
      '',
      'contract ShorubenixDecentralizedVault {',
      '    address public immutable owner;',
      '    event AssetDeployed(address indexed client, uint256 timestamp);',
      '',
      '    constructor() { owner = msg.sender; }',
      '',
      '    function executeTransformation() external payable {',
      '        require(msg.value > 0, "Invalid payload");',
      '        emit AssetDeployed(msg.sender, block.timestamp);',
      '    }',
      '}'
    ]
  }
]

export default function CodeTerminalAnimation() {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0)
  const [displayedLineCount, setDisplayedLineCount] = useState(0)
  const [terminalLogs, setTerminalLogs] = useState([
    '⚡ Initializing Shorubenix Core Engine v2026.8...',
    '✔ Connected to Cloud Node: ap-south-1 (Mumbai)',
    '✔ Plagiarism & Security Audit: PASS (<10% threshold)'
  ])

  const currentSnippet = CODE_SNIPPETS[activeSnippetIdx]

  useEffect(() => {
    setDisplayedLineCount(0)
    const interval = setInterval(() => {
      setDisplayedLineCount((prev) => {
        if (prev < currentSnippet.lines.length) {
          return prev + 1
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, 180)

    return () => clearInterval(interval)
  }, [activeSnippetIdx])

  // Auto switch snippet tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSnippetIdx((prev) => (prev + 1) % CODE_SNIPPETS.length)
      setTerminalLogs((prev) => [
        ...prev.slice(-3),
        `⚡ Switched stack to ${CODE_SNIPPETS[(activeSnippetIdx + 1) % CODE_SNIPPETS.length].lang}`
      ])
    }, 7000)
    return () => clearInterval(timer)
  }, [activeSnippetIdx])

  return (
    <div className="terminal-container nx-card-gradient shadow-2xl">
      <div className="terminal-header flex items-center justify-between px-4 py-3 bg-[#0d0d12] border-b border-[#1f1f2a]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-xs font-mono text-gray-400 font-semibold">{currentSnippet.filename}</span>
        </div>

        {/* Tab Badges */}
        <div className="flex items-center gap-2">
          {CODE_SNIPPETS.map((snip, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSnippetIdx(idx)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                activeSnippetIdx === idx
                  ? 'bg-[#21B6FF]/20 text-[#21B6FF] border border-[#21B6FF]/40 font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {snip.lang}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="terminal-body p-5 font-mono text-xs md:text-sm bg-[#08080c] text-gray-200 overflow-x-auto min-h-[260px]">
        {currentSnippet.lines.slice(0, displayedLineCount).map((line, lineIdx) => (
          <div key={lineIdx} className="terminal-line flex gap-4 hover:bg-[#21B6FF]/5 px-2 py-0.5 rounded">
            <span className="select-none text-gray-600 text-right w-6 flex-shrink-0">{lineIdx + 1}</span>
            <span className="terminal-code flex-1 font-mono">
              {line.startsWith('import') ? (
                <span className="text-[#21B6FF]">{line}</span>
              ) : line.startsWith('export') || line.startsWith('function') || line.startsWith('class') ? (
                <span className="text-[#70CEFF] font-bold">{line}</span>
              ) : line.includes('//') || line.includes('#') ? (
                <span className="text-green-400 italic">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </span>
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-[#21B6FF] animate-pulse ml-10 mt-1" />
      </div>

      {/* Terminal Status Output Log */}
      <div className="terminal-output p-4 bg-[#0a0a0f] border-t border-[#1f1f2a] font-mono text-xs text-[#99DCFF]/90 flex flex-col gap-1">
        <div className="flex items-center justify-between text-gray-400 text-[10px] uppercase tracking-wider mb-1">
          <span>CONSOLE LOG OUTPUT</span>
          <span className="text-green-400">● LIVE RUNTIME ACTIVE</span>
        </div>
        {terminalLogs.map((log, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[#21B6FF]">&gt;</span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
