<?php

namespace Hario\CustomThemeBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class HarioCustomThemeBundle extends Bundle
{
	public function getParent(){
        return 'OroUIBundle';
    }
}
