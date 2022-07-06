export const GenericContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:min-w-xl md:min-w-full lg:min-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {children}
        </div>
    )
}