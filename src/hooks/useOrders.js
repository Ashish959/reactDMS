import { useState, useEffect } from "react";
import { getOrderByClient } from "../api/orderApi";

// dummy comments start

// dummy comments end

export default function useOrders({
    clientId,
    action,
    fromDate,
    toDate,
}) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!fromDate || !toDate) return;

        const fetchOrders = async () => {
            setLoading(true);
            try {
                const data = await getOrderByClient({
                    clientId,
                    action,
                    startDate: fromDate,
                    endDate: toDate,
                });

                setRows(data || []);
            } catch (err) {
                console.error("Order API error", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [clientId, action, fromDate, toDate]);

    return { rows, loading };
}
