<?php
if(!kirby()->get('option', 'egr.delete.set')) {
kirby()->set('option', 'egr.delete.set', true);
?>
<div class="egr-element-delete">
	<div class="egr-delete-message">
		<div class="label"><?php _l('fields.structure.delete.label') ?></div>
		<div class="egr-delete-buttons">
			<div class="egr-delete-cancel"><span><?php _l('fields.structure.cancel'); ?></span></div>
			<div class="egr-delete-apply"><?php _l('fields.structure.delete'); ?></div>
		</div>
	</div>
</div>
<?php }