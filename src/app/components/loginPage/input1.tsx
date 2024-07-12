interface Props {
    placeholder: string;
    type : string;
}


export const Input = (Props:Props) => {
    return(
        
            <input 
            placeholder={Props.placeholder}
            className="text-gray-600 pl-4 w-80 h-12 md:w-[480px] md:h-16 bg-gray-200 rounded-lg border border-solid border-slate-500"
            type="text" />
    );
}