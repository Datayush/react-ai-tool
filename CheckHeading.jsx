import React from "react";

export function CheckHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

export function replaceHeadingStrings(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
