import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/solutions/SolutionPage";
import { getSolution, solutions } from "@/data/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return {
    title: solution.metadataTitle,
    description: solution.description,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return <SolutionPage solution={solution} />;
}
