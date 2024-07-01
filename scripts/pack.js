const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const { execSync } = require('child_process');

const distPath = path.resolve(__dirname, '..', 'dist');
let isExist = fs.existsSync(distPath);
if (!isExist) {
  console.error('打包的dist文件不存在');
  process.exit();
}
// 写入pwa的推送相关
fs.writeFileSync(
  path.resolve(distPath, 'OneSignalSDKWorker.js'),
  `importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");`,
  'utf-8',
);

const packPath = path.resolve(__dirname, '..', 'pack');
isExist = fs.existsSync(packPath);
if (!isExist) {
  fs.mkdirSync(packPath);
}

let target = 'fury-client';
if (
  process.env.npm_lifecycle_event &&
  /:\S+?-server/.test(process.env.npm_lifecycle_event)
) {
  const matchName = process.env.npm_lifecycle_event.match(/:\S+?-server/)[0];
  const tag = matchName.slice(1, -7);
  target = `${target}-${tag}`;
}
try {
  const furyPath = path.resolve(__dirname, '..', 'pack', target);

  if (fs.existsSync(furyPath)) {
    execSync(`rm -rf ${furyPath}`);
  }

  const zipPath = path.resolve(__dirname, '..', 'pack', `${target}.zip`);
  if (fs.existsSync(zipPath)) {
    execSync(`rm -rf ${zipPath}`);
  }

  fs.renameSync(distPath, furyPath);

  const zip = new AdmZip();
  zip.addLocalFolder(furyPath, target); // 添加要压缩的文件

  zip.writeZip(zipPath); // 保存压缩文件

  console.log('生成发布包成功', zipPath);
} catch (error) {
  console.log('执行pack失败', error.message);
}
