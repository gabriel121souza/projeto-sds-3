import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

function DashBoard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcetangem de vendas(%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />

        </>
    );
}

export default DashBoard

