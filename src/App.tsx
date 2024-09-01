import Button from "./components/button/Button.tsx";
import Headerlg from "./components/header/Header_log.tsx";
import Footer from "./components/footer/Footer.tsx";
import { MouseEvent } from "react";
import "./App.css";

function App() {
  const onButtonClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <div>
      <Headerlg/>
      <div className="flex flex-row gap-6 py-24">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <Button>Войти</Button>
            <Button viewType="outline">Войти</Button>
            <Button viewType="success">Войти</Button>
            <Button viewType="attention">Войти</Button>
            <Button viewType="error">Войти</Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button disabled={true}>Войти</Button>
            <Button disabled={true} viewType="outline" onClick={onButtonClick}>
              Войти
            </Button>
            <Button disabled={true} viewType="success">
              Войти
            </Button>
            <Button disabled={true} viewType="attention">
              Войти
            </Button>
            <Button disabled={true} viewType="error">
              Войти
            </Button>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <Button size="sm">Войти</Button>
            <Button size="sm" viewType="outline">
              Войти
            </Button>
            <Button size="sm" viewType="success">
              Войти
            </Button>
            <Button size="sm" viewType="attention">
              Войти
            </Button>
            <Button size="sm" viewType="error">
              Войти
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button size="sm" disabled={true}>
              Войти
            </Button>
            <Button
              size="sm"
              disabled={true}
              viewType="outline"
              onClick={onButtonClick}
            >
              Войти
            </Button>
            <Button size="sm" disabled={true} viewType="success">
              Войти
            </Button>
            <Button size="sm" disabled={true} viewType="attention">
              Войти
            </Button>
            <Button size="sm" disabled={true} viewType="error">
              Войти
            </Button>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <Button buttonType="2">Больше</Button>
            <Button buttonType="2" viewType="outline">
              Больше
            </Button>
            <Button buttonType="2" viewType="success">
              Больше
            </Button>
            <Button buttonType="2" viewType="attention">
              Больше
            </Button>
            <Button buttonType="2" viewType="error">
              Больше
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button buttonType="2" disabled={true}>
              Больше
            </Button>
            <Button
              buttonType="2"
              disabled={true}
              viewType="outline"
              onClick={onButtonClick}
            >
              Больше
            </Button>
            <Button buttonType="2" disabled={true} viewType="success">
              Больше
            </Button>
            <Button buttonType="2" disabled={true} viewType="attention">
              Больше
            </Button>
            <Button buttonType="2" disabled={true} viewType="error">
              Больше
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
