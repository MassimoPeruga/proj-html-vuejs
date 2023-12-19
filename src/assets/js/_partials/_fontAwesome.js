import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faMagnifyingGlass, faChevronRight, faRightLong, faFileLines,
    faMugSaucer, faCubes, faLaptop, faWrench, faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import {
    faApple, faWindows, faAndroid, faFacebookF, faXTwitter,
    faInstagram, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add(
    faMagnifyingGlass, faChevronRight, faRightLong, faFileLines,
    faApple, faWindows, faAndroid, faMugSaucer, faCubes, faLaptop,
    faWrench, faCopyright, faFacebookF, faXTwitter, faInstagram,
    faYoutube, faChevronUp
);

export { FontAwesomeIcon };