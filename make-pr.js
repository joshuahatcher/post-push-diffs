const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  auth: 'a8d7d6b3d9ef00098bc8c52c3cfafe72e8fa6280',
  userAgent: 'octokit/rest.js v1.2.3',
  log: {
    warn: console.warn,
    error: console.error
  }
});

octokit.request('POST /repos/:owner/:repo/pulls', {
  owner: 'joshuahatcher',
  repo: 'post-push-diffs',
  title: 'Test PR!',
  head: 'jah-test-branch',
  base: 'master'
})
.then(function() {
  console.log('Success!');
})
.catch(function(err) {
  throw new Error(err.message);
});
