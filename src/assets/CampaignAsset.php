<?php
/**
 * @copyright Copyright (c) PutYourLightsOn
 */

namespace putyourlightson\campaign\assets;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * CampaignAsset bundle
 */
class CampaignAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = '@putyourlightson/campaign/../buildchain/dist';

        $this->depends = [
            CpAsset::class,
        ];

        parent::init();
    }
}
