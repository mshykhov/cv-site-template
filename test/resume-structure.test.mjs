import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("sample content is generic and the resume download starts disabled", () => {
  const data = read("../src/data/resume.ts");

  assert.match(data, /This sample profile is fictional/);
  assert.match(data, /enabled: false/);
  assert.match(data, /https:\/\/example\.com/);
  assert.equal(existsSync(new URL("../public/resume.pdf", import.meta.url)), false);
});

test("all visible resume content is read from the central config", () => {
  const page = read("../src/app/page.tsx");
  const header = read("../src/components/Header.tsx");
  const summary = read("../src/components/Summary.tsx");
  const experience = read("../src/components/Experience.tsx");
  const skills = read("../src/components/TechStack.tsx");

  assert.match(page, /<Header \/>/);
  assert.match(header, /config\.personal\.name/);
  assert.match(summary, /config\.summary/);
  assert.match(experience, /config\.experience/);
  assert.match(skills, /config\.skills/);
});
