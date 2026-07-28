import assert from "node:assert/strict";
import {
  getQueueTranslation,
  queueLocaleCodes,
  queueLocaleMeta,
  queueRequiredTranslationKeys,
  queueTranslationRowWidths,
  queueTranslations,
  resolveQueueLocale,
  searchQueueLocales,
} from "../src/data/queue-locales.ts";

assert.equal(queueLocaleCodes.length, 20, "対応言語は20件である必要があります");
assert.equal(queueLocaleMeta.length, 20, "言語メタデータは20件である必要があります");
assert.equal(new Set(queueLocaleCodes).size, 20, "ロケールコードに重複があります");

for (const { key, width } of queueTranslationRowWidths) {
  assert.equal(width, 21, `${key} はキー＋20言語の値が必要です`);
}

for (const locale of queueLocaleCodes) {
  const translation = queueTranslations[locale];
  const sections = {
    common: translation.common,
    languageSelector: translation.languageSelector,
    reception: translation.queue.reception,
    completion: translation.queue.completion,
    status: translation.queue.status,
    errors: translation.queue.errors,
  };

  for (const [section, requiredKeys] of Object.entries(queueRequiredTranslationKeys)) {
    for (const key of requiredKeys) {
      assert.equal(
        typeof sections[section][key],
        "string",
        `${locale}.${section}.${key} がありません`,
      );
      assert.ok(sections[section][key].trim(), `${locale}.${section}.${key} が空です`);
      assert.ok(!sections[section][key].includes(`${section}.`), `${locale}.${section}.${key} に未翻訳キーがあります`);
    }
  }
}

assert.equal(getQueueTranslation("not-supported"), queueTranslations.ja, "未登録言語は日本語へフォールバックします");
assert.equal(resolveQueueLocale(["en-US"]), "en");
assert.equal(resolveQueueLocale(["th-TH"]), "th");
assert.equal(resolveQueueLocale(["zh-CN"]), "zh-CN");
assert.equal(resolveQueueLocale(["zh-SG"]), "zh-CN");
assert.equal(resolveQueueLocale(["zh-TW"]), "zh-TW");
assert.equal(resolveQueueLocale(["zh-HK"]), "zh-TW");
assert.equal(resolveQueueLocale(["ar-SA"]), "ja");
assert.equal(searchQueueLocales("ドイツ")[0]?.code, "de");
assert.equal(searchQueueLocales("German")[0]?.code, "de");
assert.equal(searchQueueLocales("Deutsch")[0]?.code, "de");
assert.equal(searchQueueLocales("de")[0]?.code, "de");

console.log(`Queue locale checks passed: ${queueLocaleCodes.length} locales, ${queueTranslationRowWidths.length} translation keys.`);
