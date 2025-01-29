<script lang="ts">
	import { Stundent } from '../../models/StudentClass';
	import { students } from '../../store';

	function AddStundentToSubject(student: Stundent) {
		student.AddStudentToSubject('Dansk');
		NotifyStore();
	}

	function NotifyStore() {
		students.update((currentStudents) => {
			return [...currentStudents];
		});
	}
</script>

<h1>Stundent</h1>

{#each $students as student}
	<div>
		<p>{student.name}</p>
		<p>{student.subject}</p>
		<button on:click={() => AddStundentToSubject(student)}>Add to subject</button>
	</div>
{/each}
