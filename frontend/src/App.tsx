import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/dataTable";
import BarChart from "components/barChart";
import DonutChart from "components/donutChart";
function App() {
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
            <DonutChart  />
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

export default App;
