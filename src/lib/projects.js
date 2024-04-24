const projects = [
    {
        title: 'Babyfoot web',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        selected: false,
    },
    {
        title: 'Portfolio',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu. Congue nisi vitae suscipit tellus mauris a. Mi tempus imperdiet nulla malesuada pellentesque elit. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. In massa tempor nec feugiat nisl pretium fusce. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Tellus molestie nunc non blandit massa enim nec dui nunc. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Massa eget egestas purus viverra accumsan in. Odio facilisis mauris sit amet massa vitae tortor condimentum.',
        selected: false,
    },
    {
        title: 'Space invaders',
        type: 'Jeu',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac. Bibendum enim facilisis gravida neque convallis a. Massa sed elementum tempus egestas sed sed risus pretium quam. Arcu non sodales neque sodales ut etiam sit amet nisl. Vitae suscipit tellus mauris a. Faucibus purus in massa tempor nec feugiat nisl. Nulla facilisi etiam dignissim diam. Ut consequat semper viverra nam libero justo laoreet. Nunc sed augue lacus viverra vitae congue eu. Eget nulla facilisi etiam dignissim diam. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Non sodales neque sodales ut etiam sit amet nisl purus. Lectus quam id leo in vitae turpis massa sed elementum. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.',
        selected: false,
    },
    {
        title: 'GymPartner app',
        type: 'App mobile',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Faucibus in ornare quam viverra orci sagittis eu. Maecenas pharetra convallis posuere morbi leo urna molestie. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Accumsan sit amet nulla facilisi morbi tempus iaculis. Lacus sed turpis tincidunt id. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Sodales neque sodales ut etiam sit. Amet nulla facilisi morbi tempus iaculis urna id. Massa vitae tortor condimentum lacinia quis.',
        selected: false,
    },
    {
        title: 'Blog Laravel',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis varius. Tristique magna sit amet purus gravida quis blandit. Nunc sed id semper risus in hendrerit. Bibendum neque egestas congue quisque egestas diam in. Sagittis purus sit amet volutpat consequat mauris nunc. Urna id volutpat lacus laoreet. Quis lectus nulla at volutpat. Praesent tristique magna sit amet purus gravida quis. At elementum eu facilisis sed odio.',
        selected: false,
    },
    {
        title: 'Application symfony',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet. Risus nullam eget felis eget. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Magna ac placerat vestibulum lectus mauris. Orci eu lobortis elementum nibh tellus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Vel facilisis volutpat est velit egestas dui id. Posuere urna nec tincidunt praesent semper feugiat. Enim sed faucibus turpis in eu mi bibendum neque egestas. Sed vulputate odio ut enim blandit volutpat maecenas. Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie a iaculis at erat pellentesque. Nisl vel pretium lectus quam id leo in vitae turpis. Lectus arcu bibendum at varius vel pharetra. Vivamus at augue eget arcu dictum varius duis at consectetur. Lorem mollis aliquam ut porttitor leo. Risus nec feugiat in fermentum. Enim ut tellus elementum sagittis vitae et leo duis ut.',
        selected: false,
    },
    {
        title: 'Gitlab entreprise',
        type: 'Infra',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sagittis aliquam malesuada bibendum arcu vitae elementum. In eu mi bibendum neque egestas congue quisque egestas diam. Purus in massa tempor nec feugiat nisl. Metus dictum at tempor commodo ullamcorper. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Eu consequat ac felis donec et odio pellentesque diam. Nec feugiat in fermentum posuere urna nec. Rutrum quisque non tellus orci ac auctor. Tellus integer feugiat scelerisque varius. Ornare massa eget egestas purus viverra accumsan in nisl nisi.',
        selected: false,
    },
    {
        title: 'GymPartner API',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in nulla posuere sollicitudin aliquam. Gravida dictum fusce ut placerat orci nulla. Massa id neque aliquam vestibulum morbi blandit. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Duis convallis convallis tellus id interdum velit laoreet id. Feugiat scelerisque varius morbi enim nunc. Urna nunc id cursus metus aliquam eleifend. Nulla facilisi morbi tempus iaculis urna. Lorem mollis aliquam ut porttitor leo a diam.',
        selected: false,
    },
    {
        title: 'Projet en cours 1',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Mi proin sed libero enim sed faucibus. Ut eu sem integer vitae justo eget magna. Massa enim nec dui nunc mattis enim ut tellus elementum. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. A pellentesque sit amet porttitor eget dolor morbi. Ut sem viverra aliquet eget sit amet tellus. Augue ut lectus arcu bibendum at varius vel pharetra vel. Massa tincidunt nunc pulvinar sapien. Tellus pellentesque eu tincidunt tortor aliquam. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Scelerisque viverra mauris in aliquam. Magna fringilla urna porttitor rhoncus dolor purus non. Enim lobortis scelerisque fermentum dui faucibus in. Dictum non consectetur a erat nam at lectus urna duis.',
        selected: false,
    },
    {
        title: 'Projet en cours 2',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus ut faucibus pulvinar elementum integer enim. Diam vel quam elementum pulvinar etiam non quam lacus. Consequat id porta nibh venenatis cras. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nulla facilisi nullam vehicula ipsum a arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Elementum pulvinar etiam non quam lacus.',
        selected: false,
    },
    {
        title: 'Projet en cours 3',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus ut faucibus pulvinar elementum integer enim. Diam vel quam elementum pulvinar etiam non quam lacus. Consequat id porta nibh venenatis cras. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nulla facilisi nullam vehicula ipsum a arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Elementum pulvinar etiam non quam lacus.',
        selected: false,
    },
    {
        title: 'Projet en cours 4',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus ut faucibus pulvinar elementum integer enim. Diam vel quam elementum pulvinar etiam non quam lacus. Consequat id porta nibh venenatis cras. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nulla facilisi nullam vehicula ipsum a arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Elementum pulvinar etiam non quam lacus.',
        selected: false,
    },
    {
        title: 'Projet en cours 5',
        type: 'Web',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus ut faucibus pulvinar elementum integer enim. Diam vel quam elementum pulvinar etiam non quam lacus. Consequat id porta nibh venenatis cras. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nulla facilisi nullam vehicula ipsum a arcu. Rhoncus dolor purus non enim praesent elementum facilisis. Elementum pulvinar etiam non quam lacus.',
        selected: false,
    },
];

export default projects;