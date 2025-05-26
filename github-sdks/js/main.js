import { Octokit, App } from "octokit";

console.log(`TOKEN: ${process.env.GH_TOKEN}`)

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
  owner: 'hyps4310',
  repo: 'GitHub-Foundations-Learning',
  ref: 'refs/heads/sdksjs',
  sha: '9f9080a82f310b623e9f9b53067c15386ea9af79',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})