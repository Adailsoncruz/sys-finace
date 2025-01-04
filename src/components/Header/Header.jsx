import { Plus } from "phosphor-react";

export default function Header({open, setOpen}) {
    function handleOpenModal(){
        setOpen(true)
    }
    
    console.log(open)

    return (
        <header className="bg-[#F1F1F1] flex justify-between items-center p-4">
            <div>
                <h1 className="font-semibold" >Detalhes dos produtos</h1>
            </div>
            <div className="space-x-4 flex">
                <input type="text"
                    placeholder="Pesquisar"
                    className="border border-[#118DC0] px-6 py-1 rounded-lg placeholder:text-[#118DC0] "
                />
                <button 
                 onClick={handleOpenModal}                
                 className="bg-[#118DC0] text-white py-1 px-6 rounded hover:bg-[#426b7b] transition-all duration-300 flex items-center gap-1">
                    <Plus size={16} />Novo produto</button>
            </div>
        </header>
    )
}