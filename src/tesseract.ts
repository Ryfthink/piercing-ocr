import {Tesseract} from "tesseract.ts";

const baseDir = location.href + '/tesseract/';

const TT = Tesseract.create({
  langPath:  baseDir + 'lang/',
  workerPath: baseDir + 'worker.js',
  corePath:  baseDir + 'core.js',
});

// const LANGS = {
//   chi_sim: "简体中文",
//   chi_tra: "繁体中文",
//   deu: "德语",
//   eng: "英语",
//   fra: "法语",
//   jpn: "日语",
//   kor: "韩语",
// };

export function recognize(file: any) {
  TT.recognize(
    file,
    {lang: 'eng'}
  ).progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError));
}