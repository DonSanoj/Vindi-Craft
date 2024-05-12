export function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h3 className=" uppercase text-gray-600 font-semibold text-lg sm:text-xl leading-4 mb-3">
                {subHeader}
            </h3>
            <h2 className=" text-primary font-sm text-2xl sm:text-3xl mb-5">
                {mainHeader}
            </h2>
        </>
    );
}