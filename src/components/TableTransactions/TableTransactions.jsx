export default function TableTransactions(){
    return (
        <main className="max-w-6xl mx-auto w-full pt-48">
        <table className="w-full text-left text-[#969cb3]">
          <thead>
            <th className="font-light pl-8 pb-6">Titulo</th>
            <th className="font-light pb-6">Valor</th>
            <th className="font-light pb-6">Categoria</th>
            <th className="font-light pb-6">Data</th>
          </thead>
          <tbody className="divide-y-8 divide-[#F1F2F5]">
            <tr className="bg-white border-separate">
              <td className="p-8">Desenvolvimento de website</td>
              <td>R$ 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>12/10/2021</td>
            </tr>
            <tr className="bg-white">
              <td className="p-8">Desenvolvimento de website</td>
              <td>R$ 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>12/10/2021</td>
            </tr>
          </tbody>
        </table>
      </main>
    )
}