import React, { useState, useEffect } from "react";

export async function Fetcher() {
    return await fetch("http://localhost:3001/products").then((response) =>
        response.json()
    );
}