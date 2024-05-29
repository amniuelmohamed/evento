import { undashedAndCapitalizedString } from "@/lib/utils";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "About Acme";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <section>
                <h1>{undashedAndCapitalizedString(params.slug)}</h1>
                <p>Evento - Browse events around you.</p>
            </section>
        )
    );
}
