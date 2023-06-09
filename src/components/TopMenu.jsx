import Link from 'next/link';

const TopMenu = () => {
    return (
        <div className='hidden xl:flex xl:justify-center mt-4 mb-4 place-self-auto '>
        <ul className=' flex gap-6 mr-24 '>
            <li>
            <Link href='/'>Дом</Link>
            </li>
            <li>
            <Link href='/'>Офис</Link>
            </li>
            <li>
            <Link href='/'>HoReCa</Link>
            </li>
        </ul>
        <ul className=' flex gap-6 mr-24 '>
            <li>
                <Link href='/'>Cервисный центр</Link>
            </li>
            <li>
                <Link href='/'>Сотрудничество</Link>
            </li>
            <li>
                <Link href='/'>Доставка и оплата</Link>
            </li>
            <li>
                <Link href='/'>Еще</Link>
            </li>
        </ul> 

        <span className=' flex mr-6 '>8 (800) 100-38-10 </span> 

        <div className=' flex '>Комсомольск-на-Амуре</div>

        </div>
    )
};


export default TopMenu;