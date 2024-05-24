import './why_choose_us.css'
import Reasons from "./Reasons";
function whyChooseUs () {
    return(
        <div className="whyChooseUs-container">
            <div className="choose-left">

                <div className="choose-header">
                    <h1> trusted Clients</h1>
                    <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
                </div>
                <div className="full-para-bubble">
                    <div className="choose-textbox">
                    <p>
                            Integer congue elit non semper laoreet sed lectus orci posuer
                            nisi tempor se felis ac mauris. Pelentesque inyd urna. Integer
                            vitae felis vel magna posu du vestibulum. Num rutrum congue diam.
                            Aliquam malesuada maurs etug met curabitur laoreet convallis nisal
                            pellentesque bibnedum
                        </p>
                    </div>
                    <div className="choose-footer">
                        <p className="choose-name">JOHN DEO</p>
                        <p className="choose-position">Managing Director</p>

                    </div>

                </div>

            </div>

            <div className="choose-right">
                <div>
                    <h1>Why choose us</h1>
                    <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
                </div>
                <div className="choose-container">
                    <Reasons reasonsText={"Dui ac hendrerit elementum quam ipsum auctor lorem"}/>
                    <Reasons reasonsText={"Mauris vel magna a est lobortis volupat"}/>
                    <Reasons reasonsText={"Sed bibendum ornare lorem mauris feugat"}/>
                    <Reasons reasonsText={"Nulla scelerisque dul hendrerit elementum quam"}/>
                </div>

            </div>
        </div>
    )
}

export default whyChooseUs