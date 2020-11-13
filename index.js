const core = require('@actions/core');
const exec = require('child_process').exec;

try {
  generateLogin();
} catch (error) {
  core.setFailed(error.message);
}

function generateLogin() {
  exec('sfdx force:user:password:generate', function (error, stdout, stderr) {
    if (error) console.log(stderr);
    exec('sfdx force:user:display --json', function (error1, stdout1, stderr1) {
      const { result } = JSON.parse(stdout1);
      core.setOutput('login-url', encodeURI(`${result.loginUrl}/?un=${result.username}&pw=${result.password}`));
    });
  });
}
