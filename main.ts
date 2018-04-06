import pose from 'popmotion-pose';

const shadeProps = {
    initialPose: 'closed',
    open: {
        opacity: 1,
    },
    closed: {
        opacity: 0
    }
};

const shadePoser = pose(document.querySelector('.js-shade'), shadeProps);
