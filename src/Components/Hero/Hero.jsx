import React from "react";
import { Link } from "react-router-dom";
import { OuterLayout } from "../../Styling/Layout/Layout";
import { HeroStyled } from "./HeroStyled";

const Hero = () => {
  return (
    <HeroStyled>
      <OuterLayout>
        <Link to="/weather">Weather</Link>
        <div className="main">
          <div className="left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            ipsa, temporibus labore cupiditate voluptatem dolorem quidem est
            nihil animi error quas pariatur eos eligendi voluptate rerum
            corrupti placeat rem quae obcaecati nisi, quisquam adipisci
            voluptatibus dolorum soluta. Fugit optio nulla labore ex eveniet
            esse nesciunt dolores accusantium distinctio, asperiores dolore
            repellat animi maxime corrupti recusandae, error rem nemo molestias.
            Quisquam quasi dolores, minus, a numquam, voluptas consequatur amet
            excepturi adipisci eveniet totam. Voluptatibus repellat laboriosam,
            iure nam fugiat soluta maiores nemo. Facere magni dicta odit nobis
            amet id, ex sequi dolore, architecto a dolorum, rem nam nesciunt
            quae similique voluptatem tempore aliquid natus vitae. Nostrum alias
            consequuntur laudantium sit maxime vitae ipsum dolores. Modi
            mollitia sit blanditiis ratione cum, repellat eos illo. Sequi
            doloremque voluptates esse dicta vel temporibus quasi eaque quo
            neque natus provident dignissimos, aut doloribus vitae sit ea
            tenetur necessitatibus sapiente? Totam non dolorum, nobis quos minus
            quasi nihil necessitatibus! Iusto, laboriosam. Ex earum iste
            dignissimos consectetur nostrum voluptatibus ullam reprehenderit
            illo neque sapiente, magni optio, laboriosam ut sed aperiam id quo
            perspiciatis alias eius corporis est incidunt? Odit ipsam hic eum,
            aliquid amet maxime non corrupti eligendi dignissimos cumque,
            officia cupiditate nam laborum rem. In, odio.
          </div>
          <div className="right">
            <div className="card">
              <div className="card-main">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur neque aliquam, hic tempora saepe exercitationem
                earum placeat, ratione eos ipsam eius! Sed voluptas nihil cumque
                autem sint? Aliquid, facere saepe libero praesentium modi quam
                magni aliquam quasi repudiandae doloribus placeat recusandae qui
                est sit rerum accusamus ut illum delectus. Voluptatibus, fuga
                consequatur aperiam tempora dolorum necessitatibus totam eaque
                minus. Recusandae odio, sapiente vero eum adipisci iste fugiat
                sequi possimus voluptates voluptatibus saepe voluptatem suscipit
                sint illo in atque, ab vitae exercitationem molestias assumenda
                veritatis cupiditate dolorem. Vero, vitae excepturi culpa cum
                reiciendis tenetur unde laudantium nostrum explicabo quasi nam
                similique.
              </div>
            </div>
          </div>
        </div>
      </OuterLayout>
    </HeroStyled>
  );
};

export default Hero;
