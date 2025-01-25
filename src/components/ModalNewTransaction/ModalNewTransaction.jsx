'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

export default function ModalNewTransaction({ open, setOpen }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative w-[600px] transform overflow-hidden rounded-lg bg-white px-8 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <main className='space-y-6 px-4 pt-6'>
                            <h2 className='text-2xl font-semibold'>Cadastrar transação</h2>
                            <form className=''>
                                <input type="text" className="bg-[#E8E9EE] border border-[#D7D7D7] rounded py-4 px-6 w-full mb-6" placeholder='Título' />
                                <input type="number" className="bg-[#E8E9EE] border border-[#D7D7D7] rounded py-4 px-6 w-full mb-6" placeholder='Preço' />
                                <div className="flex gap-4">
                                    <button type='button' className="flex items-center bg-[#F1F2F5] justify-center space-x-2 flex-1 border border-[#D7D7D7] p-4 rounded">
                                        <ArrowCircleUp color="#32CD95" size={20} />
                                        <p>Entrada</p>
                                    </button>
                                    <button type='button' className="flex items-center justify-center space-x-2 flex-1 border border-[#D7D7D7] bg-[#F1F2F5] p-4 rounded">
                                        <ArrowCircleDown color="#E52E4E" size={20} />
                                        <p>Saída</p>
                                    </button>
                                </div>
                                <input type="text" className="bg-[#E8E9EE] border border-[#D7D7D7] rounded py-4 px-6 w-full my-6" placeholder='Categoria' />
                                <button className='w-full bg-[#32CD95] py-4 text-white font-semibold rounded'>Cadastrar</button>
                            </form>
                        </main>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
