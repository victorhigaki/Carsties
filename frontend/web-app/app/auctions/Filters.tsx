import { Button, ButtonGroup } from "flowbite-react";

type Props = {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
}

const pageSizeButtons = [4, 8, 12];

export default function Filters({ pageSize, setPageSize }: Props) {
    return (
        <div className="flex justify-between item-center mb-4">
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">
                    PageSize
                </span>
                <ButtonGroup outline>
                    {pageSizeButtons.map((value, index) => (
                        <Button
                            key={index}
                            onClick={() => setPageSize(value)}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            className="focus:ring-0"
                        >
                            {value}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}
