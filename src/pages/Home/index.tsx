import { Card } from "../../components/Card";
import { Header } from "./components/Header";
import { HeroesList } from "./components/HeroesList";
import { ListFilters } from "./components/ListFilters";

export function Home() {
    return (
        <>
            <Header/>
            <ListFilters />
            <HeroesList />
        </>
    )
}