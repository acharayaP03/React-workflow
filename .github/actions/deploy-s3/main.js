const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run() {
  // 1.) get input files
  const bucket = core.getInput('bucket', { required : true });
  const bucketRegion = core.getInput('bucket-region' ,{ required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2.) upload files
  const s3Url = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Url} --region ${bucketRegion}`)
  core.notice('Hello from my custom JavaScript Action!')
}


run();