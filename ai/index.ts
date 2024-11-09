import { openai } from '@ai-sdk/gemini';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: gemini(apiIdentifier),
    middleware: customMiddleware,
  });
};
