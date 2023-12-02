export const TableCell = ({ children, className }: { children: React.ReactNode, className: string }) => {
    return (
        <td className={`px-4 py-2 ${className}`}>
            {children}
        </td>
    );
};