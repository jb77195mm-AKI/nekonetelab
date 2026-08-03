import { solutions, solutionComparisonRows } from "@/data/solutions";

export function ComparisonTable() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-line-soft bg-white md:block">
        <div className="overflow-x-auto">
          <table className="min-w-[52rem] w-full table-fixed text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                <th className="w-36 px-5 py-4 font-semibold">項目</th>
                {solutions.map((solution) => (
                  <th key={solution.slug} className="px-5 py-4 font-semibold">
                    {solution.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line-soft">
              {solutionComparisonRows.map((row) => (
                <tr key={row.label}>
                  <th className="bg-cream-light px-5 py-4 font-semibold text-ink">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={solutions[index].slug} className="px-5 py-4 leading-6 text-muted">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-5 md:hidden">
        {solutions.map((solution, solutionIndex) => (
          <article key={solution.slug} className="rounded-2xl border border-line-soft bg-white p-5">
            <p className="text-xs font-semibold text-sky-900">{solution.label}</p>
            <h3 className="mt-2 text-lg font-medium">{solution.name}</h3>
            <dl className="mt-5 divide-y divide-line-soft">
              {solutionComparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-3 py-3 text-sm">
                  <dt className="font-semibold text-muted">{row.label}</dt>
                  <dd className="leading-6 text-muted">{row.values[solutionIndex]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
