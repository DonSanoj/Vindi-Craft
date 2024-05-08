export function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h3 className=" uppercase text-gray-600 font-semibold leading-4 mb-3">
                {subHeader}
            </h3>
            <h2 className=" text-primary font-sm text-2xl mb-5">
                {mainHeader}
            </h2>
        </>
    );
}