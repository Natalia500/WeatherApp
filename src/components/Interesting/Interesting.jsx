import React from "react";
import "./Interesting.css";
import dyunyPustynya from '../../img/dyunyPustynya.jpg';
import lightning from '../../img/lightning.jpg';
import clouds from '../../img/clouds.jpg';

const Interesting = () => (
    <div className="InterestingInfo">
    <h1>Цікаві факти про погоду</h1>
    <img src={dyunyPustynya} className="imgDesertAtakama" alt="" />
    <p>– У місцевості Калама, що в пустелі Атакама в Чилі, ніколи не йде дощ.</p>
    <p>– Вологе повітря утримує тепло краще, ніж сухе. Тому ночі в пустелі дуже холодні, а у вологих тропіках – спекотні.</p>
    <p>– Вдень хмари знаходяться вище, ніж вночі.</p>
    <img src={lightning} className="imgLightning" alt="" />
    <p>– Щороку блискавки поставляють в землю 10 мільйонів тонн азоту.</p>
    <p>– Найчастіше удар блискавки наздоганяє дуби, тому при грозі краще триматися від них подалі;</p>
    <p>– Найбільш грозове місце – Уганда, 250 днів з 365 проходять із громом.</p>
    <p>– В атмосфері Землі в будь-який сезон відбувається більше 1800 гроз . Щомиті в землю потрапляє близько 100 блискавок.</p>
    <p>– Тисяча тонн космічного пилу щодня падає на землю.</p>
    <p>– У природі не існує двох сніжинок з абсолютно однаковою кристалічною структурою.</p>
    <p>– Найменше сонячних днів спостерігається на російському архіпелазі Північна Земля, де Сонце світить 12 днів у році.</p>
    <p>– При ударі блискавки різниця потенціалів може досягати 100 мільйонів вольт.</p>
    <img src={clouds} className="imgClouds" alt="" />
    <p>– Якщо є бажання позагоряти на сонечку, то місця краще, ніж Мертве море йому не знайти. 
    330 днів у році у вашому розпорядженні. І всі сонячні. 
    А от Архіпелаг Північна Земля на території Росії надійно захистить гостей від сонячних днів 355 днів у році.</p>
    <p>– А от гору Уаі-Аль-Аль (острів Кау-Аі, Гаваї) можна по праву назвати мокрою. Її поливають опади цілий рік, залишаючи в спокої всього лише на 10 днів у році.</p>
    <p>– Блискавка б’є від землі в небо, а не навпаки;</p>
    <p>– У пустелі Сахара 18 лютого 1979 випав сніг.</p>
    <p>– Спочатку за допомогою парасольки захищалися від сонця. В якості захисту від дощу парасольку вперше використав англієць Джонас Хенвей ще в 1750 році.</p>
    <p>– Найсильніший снігопад стався в Каліфорнії приблизно 50 років тому. На 6 днів на гірськолижному курорті випало 5 м снігу.</p>
</div>
)

export default Interesting;