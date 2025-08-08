export default function Header() {
    return(
        <div>
            {/*nav bar*/}
            <div className='flex gap-5 m-10 float-right font-medium text-white'>
                <div className="hover:underline">HOME</div>
                <div className="hover:underline">ABOUT</div>
                <div className="hover:underline">PORTFOLIO</div>
                <div className="hover:underline">CONTACTS</div>
            </div>
        </div>
    );
}