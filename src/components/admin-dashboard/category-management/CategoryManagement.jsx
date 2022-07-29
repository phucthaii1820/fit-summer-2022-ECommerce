import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { Space, Button } from "antd";

export default function CategoryManagement() {
    // Get all categories
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategories();
    }, [categories]);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Space size={[8, 16]} wrap>
                    {categories.map((categories) => (
                        <Button>{categories.name}</Button>
                    ))}
                    <Button>Add Category</Button>
                </Space>
            )}
        </>
    );
}
