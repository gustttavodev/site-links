'use server';

/**
 * @fileOverview AI flow to remove floating elements from a given HTML content.
 *
 * - removeFloatingElements - A function that takes HTML content as input and returns HTML content with floating elements removed.
 * - RemoveFloatingElementsInput - The input type for the removeFloatingElements function.
 * - RemoveFloatingElementsOutput - The return type for the removeFloatingElements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RemoveFloatingElementsInputSchema = z.object({
  htmlContent: z
    .string()
    .describe('The HTML content from which to remove floating elements.'),
});
export type RemoveFloatingElementsInput = z.infer<typeof RemoveFloatingElementsInputSchema>;

const RemoveFloatingElementsOutputSchema = z.object({
  cleanedHtmlContent: z
    .string()
    .describe('The HTML content with floating elements removed.'),
});
export type RemoveFloatingElementsOutput = z.infer<typeof RemoveFloatingElementsOutputSchema>;

export async function removeFloatingElements(input: RemoveFloatingElementsInput): Promise<RemoveFloatingElementsOutput> {
  return removeFloatingElementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'removeFloatingElementsPrompt',
  input: {schema: RemoveFloatingElementsInputSchema},
  output: {schema: RemoveFloatingElementsOutputSchema},
  prompt: `You are an AI expert in cleaning HTML content by removing floating elements that disrupt the user experience.

  Given the following HTML content, identify and remove any floating elements such as banners, pop-ups, or sticky headers/footers that are not essential for the main content.

  Return the cleaned HTML content.

  HTML Content: {{{htmlContent}}}`,
});

const removeFloatingElementsFlow = ai.defineFlow(
  {
    name: 'removeFloatingElementsFlow',
    inputSchema: RemoveFloatingElementsInputSchema,
    outputSchema: RemoveFloatingElementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
