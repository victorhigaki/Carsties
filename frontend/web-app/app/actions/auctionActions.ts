'use server'

import { auth } from "@/auth";
import { Auction, PagedResult } from "@/types";

export async function getData(query: string): Promise<PagedResult<Auction>> {
    const res = await fetch(`http://localhost:6001/search${query}`)

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
}

export async function updateAuctionTest(): Promise<{ status: number, message: string }> {
    const data = {
        mileage: Math.floor(Math.random() * 10000) + 1
    }

    const session = await auth();

    const res = await fetch(`http://localhost:6001/actions/afbee524-5972-4075-8800-7d1f9d7b0a0c`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.accessToken}`
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) return { status: res.status, message: res.statusText };

    return { status: res.status, message: res.statusText }
}