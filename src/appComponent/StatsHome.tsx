import {
    Item,
    ItemContent,
    ItemGroup,
    ItemTitle,
} from "../components/ui/item"
import { Box, TrendingUp, TriangleAlert, CircleDollarSign } from 'lucide-react';


export function StatsHome({ products }: { products: any[] }) {

    //const { inventory } = useInventory(`http://localhost:8000/inventory`);

    return (
        <div className="flex w-full flex-col gap-8">
            <ItemGroup className="h-40 grid grid-cols-4 gap-8 rounded">
                <Item asChild className="bg-white">
                    <a href="/">
                        <ItemContent>
                            <ItemTitle>
                                <div className="flex flex-row justify-around">
                                    <div className="flex flex-col gap-4 px-8 text-xl">
                                        <span>Total Products</span>
                                        <span className="">{products.length}</span>
                                    </div>
                                    <div>
                                        <span className="px-8"><Box color="#5e91c5ff" />
                                        </span>
                                    </div>
                                </div>
                            </ItemTitle>
                        </ItemContent>
                    </a>
                </Item>
                <Item asChild className="bg-white">
                    <a href="/LogIn">
                        <ItemContent>
                            <ItemTitle><div className="flex flex-col gap-4 text-xl"><span>Total Items</span><span>{products.length}</span></div>
                                <span className='rounded bg-green-200'><TrendingUp color="#3e9364ff" /></span></ItemTitle>
                        </ItemContent>
                    </a>
                </Item>
                <Item asChild className="bg-white">
                    <a href="/LogIn">
                        <ItemContent>
                            <ItemTitle>Low Stock Alerts<span className='rounded bg-red-200'><TriangleAlert color="#df1d3aff" /></span></ItemTitle>
                        </ItemContent>
                    </a>
                </Item>
                <Item asChild className="bg-white">
                    <a href="/LogIn">
                        <ItemContent>
                            <ItemTitle><h2>Total Value</h2><span className='rounded bg-purple-200'><CircleDollarSign color="#9b46c3ff" /></span></ItemTitle>
                        </ItemContent>
                    </a>
                </Item>
            </ItemGroup>
        </div>
    )
}

