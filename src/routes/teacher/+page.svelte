<script lang="ts">
	import { Teacher } from '../../models/TeacherClass';
	import { teachers } from '../../store';

	function AddTeacherToSubject(teacher: Teacher) {
		teacher.AddSubject('Dansk');
		NotifyStore();
	}

	function NotifyStore() {
		teachers.update((currentTeachers) => {
			return [...currentTeachers];
		});
	}
</script>

<h1>Teacher</h1>

{#each $teachers as teacher}
	<div>
		<p>{teacher.name}</p>
		<p>{teacher.subject}</p>
		<button on:click={() => AddTeacherToSubject(teacher)}>Add to subject</button>
	</div>
{/each}
