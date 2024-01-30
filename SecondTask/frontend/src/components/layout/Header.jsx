import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <div className='bg-stone-300'>
            <header className='container flex justify-end items-center'>
                <NavLink className='px-4 py-3 hover:bg-stone-500 hover:text-white' to={'/create-student'}>Sukurti studenta</NavLink>
                <NavLink className='px-4 py-3 hover:bg-stone-500 hover:text-white' to={'/list-student'}>Studentu sarasas</NavLink>
            </header>
        </div>
    );
}
