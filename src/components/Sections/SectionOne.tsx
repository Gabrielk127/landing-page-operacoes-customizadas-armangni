import {
  ChartColumnIncreasing,
  DollarSign,
  TrendingUp,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Modal from "../Modal";
import Button from "../Button";

const SectionOne: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className=" w-full max-w-[1280px] mx-auto
      px-6 pb-16 pt-6
      sm:px-12
      md:px-16
      xl:px-36 xl:pb-16
  "
    >
      {/* MOBILE */}
      <div className="sm:px-10 md:px-0 md:hidden">
        <Button
          label="Quero agendar uma consultoria de crédito para meu negócio"
          onClick={openModal}
        />
      </div>

      <div className=" text-white flex items-center justify-center">
        <div>
          <div className="mx-auto">
            <h2
              className="text-lg text-center font-bold pb-4 pt-8 flex flex-col items-center justify-center
                  sm:text-xl sm:mt-0 sm:flex-row
                  md:text-2xl md:pt-10
                  lg:text-3xl lg:pt-16 lg:pb-8
                  xl:text-4xl xl:leading-normal
                  "
            >
              <ChartColumnIncreasing className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Adquira o Seu Crédito Inteligente
            </h2>
            <div className="grid md:grid-cols-2 gap-6 justify-center md:justify-between">
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <DollarSign className="w-6 h-6 mr-2 text-custom-icons" />É
                  para você que deseja adquirir:
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs
                md:text-base
              "
                  >
                    ✔️ Operações financeiras personalizadas
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Ajustável à sua capacidade de pagamento
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Crédito Inteligente
                  </li>
                </ul>
              </div>
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <TrendingUp className="w-6 h-6 mr-2 text-custom-icons" />
                  Captação de recursos:
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ❌ Sem necessidade de grandes aportes
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ❌ Comprometer seu fluxo de caixa
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ❌ Operações inflexíveis de alto custo
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="text-base text-center font-bold pt-8 flex flex-col items-center justify-center
              sm:text-lg sm:mt-0
              md:text-xl md:pt-8
              lg:text-2xl
              xl:text-xl xl:leading-normal
              "
            >
              <User className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Você poderá escalar e melhorar seus resultados de maneira eficaz,
              e quero explicar como fazer isso.
            </p>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default SectionOne;
