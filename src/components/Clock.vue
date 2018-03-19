
<template>
    
    <div class="clock">
        <div class="clock-face">
            <div class="hand second"></div>
            <div class="hand minute"></div>
            <div class="hand hour"></div>
        </div>
    </div>

</template>


<script>
    
    export default {
        name: 'Clock',
        mounted: function () {

            const secondHand = this.$el.querySelector('.hand.second');
            const minuteHand = this.$el.querySelector('.hand.minute');
            const hourHand = this.$el.querySelector('.hand.hour');

            setInterval(() => {

                const now = new Date();
                const secondsDegrees = ((now.getSeconds() / 60) * 360) + 90;
                const minutesDegrees = ((now.getMinutes() / 60) * 360) + 90;
                const hoursDegrees = ((now.getHours() / 12) * 360) + 90;

                secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
                minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
                hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

            }, 1000)
        }
    }

</script>


<style lang="scss" scoped>
    
    .clock {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        height: 3rem;
        width: 3rem;

        .clock-face {
            border: 1px solid grey;
            border-radius: 50%;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            background-color: #FFF;
            // box-shadow: 1px 1px 10px 10px rgba(0,0,0,.1);

            .hand {
                width: 30%;
                height: 1px;
                background-color: grey;
                position: absolute;
                top: 50%;
                right: 50%;
                transform-origin: 100%;

                &.hour {
                    width: 30%;
                }

                &.minute {
                    z-index: 10;
                    width: 40%;
                }

                &.second {
                    width: 42%;
                    z-index: 20;
                    background-color: red;
                }
            }
        }
    }

</style>