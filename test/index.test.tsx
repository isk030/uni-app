/**
 * @vitest-environment jsdom
 */

import Home from '@/app/page';
import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

vi.mock('public/logo.png', () => ({
    default: { src: '/logo.png' },
}));

test('renders canvas element', () => {
    // This is an example of how to ensure a specific item is in the document
    // But it's disabled by default (by test.skip) so the test doesn't fail
    // when you remove the default content from the page

    // This is an example on how to mock api hooks when testing

    const { container } = render(<Home />);
    const element = container.querySelector('aside');
    expect(element).toBeInTheDocument();
});
