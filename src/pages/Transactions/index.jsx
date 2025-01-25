import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from "phosphor-react"
import { useState } from "react"
import ModalNewTransaction from "../../components/ModalNewTransaction/ModalNewTransaction"
import TableTransactions from "../../components/TableTransactions/TableTransactions"
import Card from "../../components/Card/Card"

function Transactions() {
    const [open, setOpen] = useState(true)

    return (
        <main className="bg-[#F1F2F5] w-full h-screen flex flex-col">
            <header className="bg-[#C61167] p-6 flex justify-center w-full text-white">
                <div className="max-w-6xl flex flex-col w-full">
                    <section className="flex justify-between items-center pb-16">
                        <div className="font-semibold">digital money</div>
                        <button className="bg-[#d83785] px-10 py-3 rounded transition-all duration-300 hover:bg-[#a72a67]">Nova transação</button>
                    </section>

                    <section className="transform translate-y-24 flex justify-between space-x-4">
                        <Card
                            title="Entrada"
                            icon={<ArrowCircleUp color="#32CD95" size={32} />}
                            value="R$ 00,00"
                            backgroundColor="bg-white" 
                            textColor="text-[#363f5f]"
                            />
                        <Card
                            title="Saída"
                            icon={<ArrowCircleDown color="#E52E4E" size={32} />}
                            value="R$ 00,00"
                            backgroundColor="bg-white"
                            textColor="text-[#363f5f]"
                             />
                        <Card
                            title="Total"
                            icon={<CurrencyDollarSimple color="#fff" size={32} />}
                            value="R$ 00,00"
                            backgroundColor="bg-[#32CD95]"
                            textColor="text-white"
                             />

                        {/* <div className="bg-white p-8 space-y-6 rounded shadow-md w-full">
              <header className="flex justify-between items-center">
                <h2 className="text-[#363f5f]">Saídas</h2>
                <ArrowCircleDown color="#E52E4E" size={32} />
              </header>
              <h1 className="text-[#363f5f] text-4xl">
                R$ 0,00
                </h1>
            </div> */}

                        {/* <div className="bg-[#32CD95] text-white p-8 space-y-6 rounded shadow-md w-full">
              <header className="flex justify-between items-center">
                <h2>Total</h2>
                <CurrencyDollarSimple color="#fff" size={32} />
              </header>
              <h1 className="text-4xl">R$ 0,00</h1>
            </div> */}

                    </section>
                </div>
            </header>
            <TableTransactions />
            <ModalNewTransaction open={open} setOpen={setOpen} /> /
        </main>
    )
}

export default Transactions
